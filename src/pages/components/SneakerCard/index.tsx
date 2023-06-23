import React from "react";

const SneakerCard = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="max-h-[1000px] max-w-[200px]">
        <img
          className="rounded-md"
          src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4f262c8a-5347-4de3-a65f-1264f0464249/lebron-nxxt-gen-basketball-shoes-VShP8m.png"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Nike LeBron NXXT</h2>
        <div className="divider mt-0 mb-0"></div>
        <p>SKU: DR8784-101</p>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <div className="flex flex-row justify-start gap-2">
          <div className="badge badge-primary mt-2">Outdoor</div>
          <div className="badge badge-primary mt-2">Indoor</div>
        </div>

        <div className="divider mt-0 mb-0"></div>
        <div>
          <div className="flex flex-row items-center gap-2">
            <p>Tração</p>
            <progress
              className="progress progress-success w-56"
              value={55}
              max="100"
            ></progress>
          </div>
          <div className="flex flex-row items-center gap-2">
            <p>Conforto</p>
            <progress
              className="progress progress-success w-56"
              value={15}
              max="100"
            ></progress>
          </div>
          <div className="flex flex-row items-center gap-2">
            <p>Material</p>
            <progress
              className="progress progress-success w-56"
              value={99}
              max="100"
            ></progress>
          </div>
          <div className="flex flex-row items-center gap-2">
            <p>Suporte</p>
            <progress
              className="progress progress-success w-56"
              value={70}
              max="100"
            ></progress>
          </div>
          <div className="flex flex-row items-center gap-2">
            <p>Encaixe</p>
            <progress
              className="progress progress-success w-56"
              value={40}
              max="100"
            ></progress>
          </div>
          <div className="flex flex-row items-center gap-2">
            <p>Durabilidade</p>
            <progress
              className="progress progress-success w-56"
              value={78}
              max="100"
            ></progress>
          </div>
        </div>
        <div className="card-actions justify-center mt-2">
          <a
            href="https://www.nike.com.br/lebron-nxxt-gen-025487.html"
            target="_blank"
          >
            <button className="btn btn-primary">Comprar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SneakerCard;
