import React from 'react';
import { ProjectData } from '../data/dummy.jsx';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { cn } from '@/lib/utils';

const formatNumber = (num) => {
  if (num >= 1000) {
    if (num % 10 === 0) return `${(num / 1000).toFixed(0)}k`;
    return `${(num / 1000).toFixed(1)}k`;
  }
  return num;
};

const ProjectStatus = ({ className = '', height = 'h-100' }) => {
  const data = ProjectData?.[0] || {};
  return (
    <div className={cn('w-full flex flex-col gap-6 overflow-hidden sm:flex sm:flex-row sm:gap-6 ', className, height)}>
      {/* Left Section fixed 75% on md+ */}
      <div className="flex flex-col min-w-0 h-full w-full sm:basis-3/4 sm:max-w-[75%] sm:grow-0 sm:shrink-0">
        {/* Use flex to split space equally */}
        <div className="flex flex-col flex-1 min-h-0">
          {/* Stats Row (top half) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1 min-h-0">
            <div className="bg-blue-100 shadow-sm rounded-lg p-3 text-center border border-dashed border-blue-200 flex flex-col justify-center">
              <h3 className="font-bold text-blue-600 text-xs sm:text-sm truncate">Project</h3>
              <p className="text-lg sm:text-xl font-bold">{formatNumber(data.Project)}</p>
            </div>
            <div className="bg-gray-200 shadow-sm rounded-lg p-3 text-center border border-dashed border-gray-300 flex flex-col justify-center">
              <h3 className="font-bold text-gray-700 text-xs sm:text-sm truncate">Assigned</h3>
              <p className="text-lg sm:text-xl font-bold">{formatNumber(data.Assigned)}</p>
            </div>
            <div className="bg-yellow-100 shadow-sm rounded-lg p-3 text-center border border-dashed border-yellow-200 flex flex-col justify-center">
              <h3 className="font-bold text-yellow-600 text-xs sm:text-sm truncate">In Progress</h3>
              <p className="text-lg sm:text-xl font-bold">{formatNumber(data.InProgress)}</p>
            </div>
            <div className="bg-gray-100 shadow-sm rounded-lg p-3 text-center border border-dashed border-gray-200 flex flex-col justify-center">
              <h3 className="font-bold text-gray-700 text-xs sm:text-sm truncate">Completed</h3>
              <p className="text-lg sm:text-xl font-bold">{formatNumber(data.Completed)}</p>
            </div>
          </div>
          {/* Bottom Metrics (bottom half) */}
          <div className="flex flex-col gap-4 flex-1 mt-4">
            <div className="flex flex-wrap items-center gap-2 bg-white rounded-lg p-3 shadow-sm">
              <p className="text-gray-700 text-sm leading-snug">
                On Time Completion Rating: <span className="font-bold text-blue-600">{data.OnTimeCompletion}%</span>{' '}
                <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-lg text-xs font-semibold inline-block">{data.Improvement}%</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
              <div className="bg-gray-200 rounded-lg h-3 w-full overflow-hidden">
                <div
                  className="bg-gray-600 h-3 rounded-lg transition-all duration-300"
                  style={{ width: `${data.Processing || 0}%` }}
                ></div>
              </div>
              <p className="text-gray-700 font-bold text-xs sm:text-sm whitespace-nowrap">
                {data.Processing}% Processing
              </p>
              <button className="text-gray-400 hover:text-gray-600 text-xs font-bold" aria-label="Close">×</button>
            </div>
          </div>
        </div>
      </div>
  {/* Right Section fixed 25% on sm+ */}
  <div className="flex flex-row sm:flex-col gap-4 justify-start sm:justify-center flex-nowrap w-full min-w-0 h-full sm:basis-1/4 sm:max-w-[25%]  sm:grow-0 sm:shrink-0">
        <div className="bg-white shadow-sm rounded-lg p-4 text-center border border-dashed border-gray-200 flex-1 min-w-[140px] flex flex-col justify-center">
          <h3 className="font-bold text-gray-700 text-xs sm:text-sm mb-2">Hours</h3>
          <div className="w-20 h-20 mx-auto">
            <CircularProgressbar
              value={(data.Hours / 100) * 100 || 0}
              text={`${data.Hours || 0}h`}
              styles={buildStyles({
                textSize: '14px',
                pathColor: '#4caf50',
                textColor: '#4caf50',
                trailColor: '#d6d6d6',
              })}
            />
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-4 text-center border border-dashed border-gray-200 flex-1 min-w-[140px] flex flex-col justify-center">
          <h3 className="font-bold text-gray-700 text-xs sm:text-sm mb-2">Total Tasks</h3>
          <div className="w-20 h-20 mx-auto">
            <CircularProgressbar
              value={data.TaskTotal ? (data.TaskComplete / data.TaskTotal) * 100 : 0}
              text={`${data.TaskComplete || 0}/${data.TaskTotal || 0}`}
              styles={buildStyles({
                textSize: '14px',
                pathColor: '#2196f3',
                textColor: '#2196f3',
                trailColor: '#d6d6d6',
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStatus;
