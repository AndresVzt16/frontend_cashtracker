import React from "react";

const DashboardHero = () => {
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      <div className="absolute -left-14 top-20 size-28 rounded-full bg-[#a888ff]/25 blur-2xl" />
      <div className="absolute -right-6 -top-8 size-40 rounded-full bg-[#9af0da]/15 blur-3xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-white/95 p-5 text-[#17112b] shadow-[0_35px_80px_rgba(26,9,74,0.35)] backdrop-blur">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8a829c]">
              Balance disponible
            </p>
            <p className="mt-1 text-[28px] font-extrabold tracking-[-0.05em]">
              $ 4.850.200
            </p>
          </div>
          <span className="grid size-9 place-items-center rounded-full bg-[#eee9ff] text-[#6236cf]">
            <svg
              aria-hidden="true"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24">
              <path
                d="M12 3v18M17 7.5c0-1.7-2-3-4.5-3S8 5.8 8 7.5s1.8 2.6 4.5 3S17 11.8 17 13.5s-2 3-4.5 3S8 15.2 8 13.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.9"
              />
            </svg>
          </span>
        </div>

        <div className="flex h-28 items-end gap-2 rounded-2xl bg-[#f7f5fc] px-4 pb-3 pt-5">
          {[38, 52, 44, 70, 58, 82, 68, 94, 76, 100, 86, 110].map(
            (height, index) => (
              <div
                className={`flex-1 rounded-t-full ${
                  index > 8 ? "bg-[#6b40d8]" : "bg-[#d9cff4]"
                }`}
                key={index}
                style={{ height }}
              />
            ),
          )}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-[#eeeaf5] p-3.5">
            <p className="text-xs font-semibold text-[#8a829c]">Ingresos</p>
            <p className="mt-1 font-extrabold text-[#221a35]">+ $ 2.4M</p>
          </div>
          <div className="rounded-2xl border border-[#eeeaf5] p-3.5">
            <p className="text-xs font-semibold text-[#8a829c]">
              Ahorro del mes
            </p>
            <p className="mt-1 font-extrabold text-[#1a8f73]">+ 18.6%</p>
          </div>
        </div>
      </div>

      <div className="absolute box-content -top-8 flex items-center gap-3 rounded-2xl border border-white/30 bg-white px-4 py-3 text-[#17112b] shadow-xl -right-10">
        <span className="grid size-9 place-items-center rounded-full bg-[#dcf8ed] text-[#178b6e]">
          <svg
            aria-hidden="true"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24">
            <path
              d="m7 12 3.2 3.2L17.5 8"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
            />
          </svg>
        </span>
        <div>
          <p className="text-[11px] font-semibold text-[#8a829c]">
            Meta mensual
          </p>
          <p className="text-sm font-extrabold">Completada</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHero;
