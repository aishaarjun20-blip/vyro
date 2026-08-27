import React from 'react';
import { X, Ruler, CheckCircle2 } from 'lucide-react';
import { SIZE_CHART } from '../data/products';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-neutral-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#121212] hover:bg-[#1c1c1c] text-neutral-400 hover:text-white transition-colors border border-white/10"
          aria-label="Close size chart"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/20">
            <Ruler className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-outfit text-white">VYRO Official Sportswear Size Guide</h3>
            <p className="text-xs text-neutral-400">Regular athletic fit for jerseys, shirts, and sports pants</p>
          </div>
        </div>

        {/* Size Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#121212] mb-6">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#161616] text-neutral-400 font-tech uppercase tracking-wider border-b border-white/10">
              <tr>
                <th className="p-3 sm:p-3.5 text-[#00ff41] font-bold">Size</th>
                <th className="p-3 sm:p-3.5">Chest (Inches / CM)</th>
                <th className="p-3 sm:p-3.5">Length (Inches)</th>
                <th className="p-3 sm:p-3.5">Shoulder</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-neutral-200 font-outfit">
              {SIZE_CHART.map((row) => (
                <tr key={row.size} className="hover:bg-white/5 transition-colors">
                  <td className="p-3 sm:p-3.5 font-bold font-tech text-base text-white">{row.size}</td>
                  <td className="p-3 sm:p-3.5">{row.chest}</td>
                  <td className="p-3 sm:p-3.5">{row.length}</td>
                  <td className="p-3 sm:p-3.5">{row.shoulder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* How to Measure Tips */}
        <div className="p-4 rounded-2xl bg-[#121212] border border-white/10 space-y-2 text-xs text-neutral-300">
          <div className="font-semibold text-[#00ff41] flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Fitting Recommendations:</span>
          </div>
          <p>• <strong>Chest:</strong> Measure around the fullest part of your chest, keeping the tape horizontal under your arms.</p>
          <p>• <strong>Fit Preference:</strong> For a tight compression fit, select your exact chest size. For a relaxed match fit with room for movement, we suggest going one size up.</p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-3 rounded-xl bg-[#1c1c1c] hover:bg-[#252525] text-white font-bold text-xs uppercase tracking-wider transition-colors border border-white/10"
        >
          Got It, Back to Product
        </button>
      </div>
    </div>
  );
};
