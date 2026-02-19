
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Mon', value: 400, efficiency: 85 },
  { name: 'Tue', value: 300, efficiency: 78 },
  { name: 'Wed', value: 600, efficiency: 92 },
  { name: 'Thu', value: 800, efficiency: 88 },
  { name: 'Fri', value: 500, efficiency: 95 },
  { name: 'Sat', value: 900, efficiency: 82 },
  { name: 'Sun', value: 700, efficiency: 90 },
];

const AnalyticsDashboard: React.FC = () => {
  return (
    <div className="bg-[#800000]/5 border border-[#800000]/10 p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h4 className="font-bold text-neutral-900">System Performance Metrics</h4>
          <p className="text-xs text-neutral-500">Live feed from Data Analysis Core</p>
        </div>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[#800000] animate-pulse" />
          <span className="text-[10px] font-bold text-[#800000] uppercase tracking-tighter">Live Monitor</span>
        </div>
      </div>
      
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#800000" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#800000" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#80000015" />
            <XAxis dataKey="name" stroke="#800000" fontSize={10} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
            />
            <Area type="monotone" dataKey="value" stroke="#800000" fillOpacity={1} fill="url(#colorVal)" strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center">
          <p className="text-xs text-neutral-400 font-bold uppercase">Uptime</p>
          <p className="text-xl font-black text-[#800000]">99.9%</p>
        </div>
        <div className="text-center border-x border-neutral-200">
          <p className="text-xs text-neutral-400 font-bold uppercase">Latency</p>
          <p className="text-xl font-black text-[#800000]">12ms</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-neutral-400 font-bold uppercase">Load</p>
          <p className="text-xl font-black text-[#800000]">0.42</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
