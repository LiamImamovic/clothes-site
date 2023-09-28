import "./App.css";
import tshirt from "./assets/tshirt.png";

function App() {
  return (
    <>
      <div className="App">
        <section className="presentation">
          <div className="px-8 py-8 flex justify-between items-start">
            <h3 className="text-white font-light text-lg">BRAND NAME</h3>
            <h2 className="big font-bold text-big tracking-min absolute">
              UNCOVER YOUR™
            </h2>
            <nav>
              <ul className="text-white mr-28 font-light">
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>WORK</li>
              </ul>
            </nav>
          </div>
          <div className="secondLine">
            <h2 className="big font-bold text-big tracking-min absolute px-8">
              SIGNATURE STYLE
            </h2>

            <p className="text-white w-36	uppercase font-light absolute">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, minus sapiente commodi modi doloribus obcaecati?
            </p>
          </div>

          <div className="thirdLine">
            <ul className="uppercase text-white font-light px-8 absolute">
              <li>2023</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem.</li>
              <br />
              <li>Lorem.</li>
              <li>Lorem.</li>
              <li>Lorem, ipsum.</li>
            </ul>

            <h2 className="big font-bold text-big tracking-min absolute px-8">
              FOR YOU
            </h2>

            <h2 className="big font-bold text-big tracking-min absolute px-8">
              FASHIONED
            </h2>

            <div className="getStarted w-32 h-32 absolute">
              <h3 className="text-black w-24 p-2 font-bold font-base">
                GET STARTED
              </h3>
              <div className="arrow ml-16">
                <svg
                  width="64px"
                  height="64px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(90)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="girl "></div>

          <div className="fourthLine flex items-center text-white absolute justify-between">
            <span>
              20 <br />
              23
            </span>

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white w-8 h-8"></div>
              <div className="flex flex-col ">
                <span>Creator</span>
                <span className="font-light">01/01/2023</span>
              </div>
            </div>

            <div className="flex items-center ">
              <h4>THE STORY / Where Styles Becomes You</h4>
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M10 7L15 12L10 17"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
        </section>

        <section className="catalog p-8">
          <h3 className="text-bg absolute font-bold opacity-20  tracking-min ui">
            UI
          </h3>
          <div className="imgCatalog"></div>

          <h3 className="croptop font-bold text-big tracking-min absolute">
            CROPTOP
          </h3>
          <h3 className="pants font-bold text-big tracking-min absolute">
            PANTS
          </h3>
          <h3 className="tshirt font-bold text-big tracking-min absolute">
            T-SHIRT
          </h3>
          <h3 className="hotpants font-bold text-big tracking-min absolute">
            HOT PANTS
          </h3>

          <ul className="uppercase text-black font-light px-8 absolute">
            <li>2023</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem.</li>
            <br />
            <li>Lorem.</li>
            <li>Lorem.</li>
            <li>Lorem, ipsum.</li>
          </ul>

          <p className="uppercase w-5/12  absolute">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolores
            porro facilis magni maiores repellat unde explicabo temporibus,
            minima totam itaque quo ex labore commodi rerum culpa accusamus
            inventore saepe.
          </p>

          <div className="necklace"></div>
        </section>
      </div>
    </>
  );
}

export default App;
