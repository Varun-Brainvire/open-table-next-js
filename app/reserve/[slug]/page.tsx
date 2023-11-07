import Link from "next/link";
import React from "react";
import NavBar from "../../components/NavBar";
import ReserveHeader from "../components/ReserveHeader";
import ReservationForm from "../components/ReservationForm";

const ReservePage = () => {
  return (
    <div>
      <main className="bg-gray-100 min-h-screen w-screen">
        <main className="max-w-screen-2xl m-auto bg-white">
          <NavBar />
          <div className="border-t h-screen">
            <div className="py-9 w-3/5 m-auto">
              <ReserveHeader />
              <ReservationForm />
            </div>
          </div>
        </main>
      </main>
    </div>
  );
};

export default ReservePage;
