import React from "react";
import Hero from "./Hero";
const News = () => {
  return (
    <div className="pocetna">
      <Hero />
      <div className="w-4/5 m-auto space-y-10">
        <div className="products grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 -content-center">
          <div className="product h-[350px] space-y-2">
            <img
              className="w-full h-4/5 object-cover"
              src="images/pancicevvrh.jpg"
              alt=""
            />
            <h1 className="text-xl font-semibold">Pancicev vrh</h1>
            <p className="font-semibold text-gray-600">
              Postavljena je na mestu i trasi najstarije žičare jednoseda na
              Kopaoniku.
            </p>
          </div>
          <div className="product h-[350px] space-y-2">
            <img
              className="w-full h-4/5 object-cover"
              src="images/suncanadolina.jpg"
              alt=""
            />
            <h1 className="text-xl font-semibold">Suncana dolina</h1>
            <p className="font-semibold text-gray-600">
              Staza vodi od hotela Putnik prema Krstu (1.715 m). Laka je i vrlo
              široka.
            </p>
          </div>
          <div className="product h-[350px] space-y-2">
            <img
              className="w-full h-4/5 object-cover"
              src="images/karamangreben.jpg"
              alt=""
            />
            <h1 className="text-xl font-semibold">Karaman greben</h1>
            <p className="font-semibold text-gray-600">
              Cesto su velike gužve i dugo je cekanje u redu na žicu.
            </p>
          </div>
          <div className="product h-[350px] space-y-2">
            <img
              className="w-full h-4/5 object-cover"
              src="images/dubokai.jpg"
              alt=""
            />
            <h1 className="text-xl font-semibold">Duboka I</h1>
            <p className="font-semibold text-gray-600">
              Preporučuje se boljim skijašima. Staza ima FIS homologizaciju za
              održavanje takmičenja.
            </p>
          </div>
        </div>

        <div className="w-full h-[300px] relative">
          <img
            className="w-full absolute top-0 rounded-xl h-full object-cover"
            src="images/takmicenje.jpg"
            alt=""
          />
          <div className="w-11/12 xl:w-1/2 m-auto h-full flex flex-col justify-center space-y-3 text-white p-5 absolute">
            <h1 className="text-4xl text-semibold">
              Prijavite se za takmičenje i osvojite vredne nagrade!
            </h1>
            <p>
              Popunite formular za prijavu u najnovijem broju časopisa
              "Kopaonik-planina Bogova!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
