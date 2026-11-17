import { motion } from "motion/react";
import { Shield, Sparkles, Activity } from "lucide-react";
import { useSettingsStore } from "../../settings/store/useSettingsStore";
import { useExploreStore } from "../../explore/store/useExploreStore";

export function OperativeStatusBadge() {
  const { username } = useSettingsStore();
  const { currentLevel, earnedBadgeIds } = useExploreStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#140205]/80 border border-red-900/40 backdrop-blur-md mb-4 text-xs font-mono shadow-md shadow-red-950/40 w-fit"
    >
      <div className="flex items-center gap-1.5 text-red-400">
        <Activity className="w-3.5 h-3.5 animate-pulse text-red-500" />
        <span className="font-semibold tracking-wider text-red-200">
          OPERATIVE:
        </span>
        <span className="text-white font-bold">{username}</span>
      </div>
      <span className="text-red-950">&bull;</span>
      <div className="flex items-center gap-1.5 text-neutral-400">
        <Sparkles className="w-3 h-3 text-amber-400" />
        <span>
          SECTOR {currentLevel < 10 ? `0${currentLevel}` : currentLevel}
        </span>
      </div>
      <span className="text-red-950">&bull;</span>
      <div className="flex items-center gap-1.5 text-neutral-400">
        <Shield className="w-3 h-3 text-red-400" />
        <span>{earnedBadgeIds.length} BADGES</span>
      </div>
    </motion.div>
  );
}

export default OperativeStatusBadge;
