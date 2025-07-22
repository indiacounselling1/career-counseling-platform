'use client';

import { useState } from 'react';
import { EducationalPathway } from '@/types';

interface DrilldownNavigatorProps {
  pathways: EducationalPathway[];
}

export function DrilldownNavigator({ pathways }: DrilldownNavigatorProps) {
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [selectedStream, setSelectedStream] = useState<string>('');

  const classes = [...new Set(pathways.map(p => p.className))].sort();
  const streams = selectedClass 
    ? [...new Set(pathways.filter(p => p.className === selectedClass).map(p => p.stream))]
    : [];

  const filteredPathways = pathways.filter(p => 
    (!selectedClass || p.className === selectedClass) &&
    (!selectedStream || p.stream === selectedStream)
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Class
          </label>
          <select 
            value={selectedClass}
            onChange={(e) => {
              setSelectedClass(e.target.value);
              setSelectedStream('');
            }}
            className="input-field"
          >
            <option value="">All Classes</option>
            {classes.map(cls => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Stream
          </label>
          <select 
            value={selectedStream}
            onChange={(e) => setSelectedStream(e.target.value)}
            className="input-field"
            disabled={!selectedClass}
          >
            <option value="">All Streams</option>
            {streams.map(stream => (
              <option key={stream} value={stream}>{stream}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPathways.map(pathway => (
          <div key={pathway.id} className="card">
            <h3 className="font-semibold text-lg mb-2">{pathway.course}</h3>
            <p className="text-sm text-gray-600 mb-2">{pathway.className} - {pathway.stream}</p>
            {pathway.eligibility && (
              <p className="text-xs text-blue-600 mb-3">{pathway.eligibility}</p>
            )}
            <div className="space-y-2">
              <div>
                <p className="text-sm font-medium">Colleges:</p>
                <p className="text-xs text-gray-600">{pathway.colleges.slice(0, 2).join(', ')}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Careers:</p>
                <p className="text-xs text-gray-600">{pathway.careers.slice(0, 2).join(', ')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPathways.length === 0 && (
        <p className="text-center text-gray-500 py-8">
          No pathways match your selected criteria.
        </p>
      )}
    </div>
  );
}
