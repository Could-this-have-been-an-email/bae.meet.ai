import React from "react";

function Agenda() {
  return (
    <div class="grid grid-cols-3 gap-1 ml-3 border shadow container flex items-center">
      <div class="col-span-1 flex items-center">
        <input type="checkbox" />
      </div>
      <div class="col-start-2 flex items-center"> Agenda Item 1</div>
      <div class="col-start-3 flex items-center justify-end">
        <i class="fa fa-arrow-up"></i>
        <i class="fa fa-arrow-down"></i>
        <span>3</span>
      </div>
    </div>
  );
}
export default Agenda;
