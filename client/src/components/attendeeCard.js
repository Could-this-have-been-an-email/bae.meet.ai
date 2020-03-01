import React from "react";

function attendeeCard() {
  return (
    <div class="max-w-sm rounded overflow-hidden">
      <div class="grid grid-cols-6 gap-1 shadow border">
        <div class="col-span-1">
          <img
            src="https://i.imgur.com/8Km9tLL.jpg"
            class="rounded-full border-solid border-white border-2 mt-3 mb-3"
          />
        </div>
        <div class="col-span-5 flex items-center justify-center">User</div>
      </div>
    </div>
  );
}

export default attendeeCard;
