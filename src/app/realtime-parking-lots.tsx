'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/browser-client';
import { ParkingLotsTable } from '@/components/parking/ParkingLotsTable';
import type { ParkingLotRecord } from '@/types/parking';

type RealtimeParkingLotsProps = {
  serverData: ParkingLotRecord[];
};

export default function RealtimeParkingLots({ serverData }: RealtimeParkingLotsProps) {
  const [parkingLots, setParkingLots] = useState<ParkingLotRecord[]>(serverData);
  const supabase = createClient();

  useEffect(() => {
    const channel = supabase
      .channel('realtime parkinglots')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'ParkingLots' }, () => {
        const fetchUpdatedData = async () => {
          const { data, error } = await supabase.from<ParkingLotRecord>('ParkingLots').select();
          if (error) {
            console.error('Error refreshing parking lots:', error);
            return;
          }
          if (data) {
            setParkingLots(data);
          }
        };
        fetchUpdatedData();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  // Render the table component with the live data
  return <ParkingLotsTable parkingLots={parkingLots} />;
}
