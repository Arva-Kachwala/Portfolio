// Frontend-only: Community wall functionality disabled (backend removed)
export function CommunityWallModal() {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70">
      <div className="flex min-h-screen items-center justify-center">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold">Community Wall Disabled</h2>
          <p className="text-gray-600">
            This feature requires backend functionality which has been disabled for frontend-only mode.
          </p>
        </div>
      </div>
    </div>
  );
}
