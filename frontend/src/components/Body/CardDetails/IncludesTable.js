import React from "react";
// import grill from "../../../assets/grill.png";
import grill from "../../../assets/grill.png";

const IncludesTable = () => {
  return (
    <div>
      <div className="flex-col shadow-lg rounded-xl border-t-4 border-cyan-900">
        <div className="bg-cyan-700 py-4 font-bold rounded-t-xl text-xl">
          Includes
        </div>
        <div className="bg-gray-50 flex flex-wrap justify-around rounded-b-xl shadow-inner">
          <div className="w-1/4 p-4 flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-tent"
            >
              <path d="M3.5 21 14 3" />
              <path d="M20.5 21 10 3" />
              <path d="M15.5 21 12 15l-3.5 6" />
              <path d="M2 21h20" />
            </svg>
            <p>Tent (Twin sharing)</p>
          </div>
          <div className="w-1/4 p-4 flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-salad"
            >
              <path d="M7 21h10" />
              <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
              <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" />
              <path d="m13 12 4-4" />
              <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" />
            </svg>
            <p>Breakfast (Limited)</p>
          </div>
          <div className="w-1/4 p-4 flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-sandwich"
            >
              <path d="M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3" />
              <path d="M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83" />
              <path d="m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z" />
              <path d="M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z" />
            </svg>
            <p>Evening Snacks (Limited)</p>
          </div>
          <div className="w-1/4 p-4 flex flex-col items-center">
            <img src={grill} className="w-16 h-16" />
            <p>Barbeque</p>
          </div>
          <div className="w-1/4 p-4 flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-utensils-crossed"
            >
              <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
              <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
              <path d="m2.1 21.8 6.4-6.3" />
              <path d="m19 5-7 7" />
            </svg>
            <p>Dinner (Unlimited)</p>
          </div>
          <div className="w-1/4 p-4 flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-book-image"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              <circle cx="10" cy="8" r="2" />
              <path d="m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17" />
            </svg>
            <p>Guide</p>
          </div>
          <div className="w-1/4 p-4 flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-parking-circle"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
            </svg>
            <p>Free Parking</p>
          </div>
          <div className="w-1/4 p-4 flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-cross"
            >
              <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z" />
            </svg>
            <p>First Aid</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncludesTable;
