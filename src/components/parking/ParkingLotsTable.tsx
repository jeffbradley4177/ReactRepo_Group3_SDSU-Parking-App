import type { ParkingLotRecord } from '@/types/parking';

type ParkingLotsTableProps = {
  parkingLots: ParkingLotRecord[];
};

export function ParkingLotsTable({ parkingLots }: ParkingLotsTableProps) {
  if (!parkingLots.length) {
    return <p>No parking lot data available.</p>;
  }

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid white', padding: '8px' }}>Lot Name</th>
          <th style={{ border: '1px solid white', padding: '8px' }}>Total Spaces</th>
          <th style={{ border: '1px solid white', padding: '8px' }}>Taken Spaces</th>
        </tr>
      </thead>
      <tbody>
        {parkingLots.map((lot) => (
          <tr key={Number(lot.Index)}>
            <td style={{ border: '1px solid white', padding: '8px' }}>{String(lot.LotNumber)}</td>
            <td style={{ border: '1px solid white', padding: '8px' }}>{String(lot.TotalSpaces)}</td>
            <td style={{ border: '1px solid white', padding: '8px' }}>{String(lot.TakenSpaces)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
