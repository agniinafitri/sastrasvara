const Stories = () => {
  const stories = [
    {
      id: 1,
      title: "Legenda Aji Saka",
      image: "/assets/images/ajisaka.jpeg",
      audio: "/assets/audios/ajisaka.mpeg",
    },
    {
      id: 2,
      title: "Asal Usul Coban Rondo",
      image: "/assets/images/coban_rondo.jpeg",
      audio: "/assets/audios/coban_rondo.mpeg",
    },
  ];

  return (
    <div className="cerita container text-center mb-5">
      <h2 className="mb-4">Cerita</h2>
      <div class="row align-items-center justify-content-evenly">
        {stories.map((story) => {
          return (
            <div class="cerita-card col-lg-5 col-md-10 col-xs-12 d-flex align-items-center">
              <img src={story.image} alt={story.title} />
              <div className="text-start mx-3">
                <h5 className="mb-3">{story.title}</h5>
                <audio src={story.audio} controls ></audio>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stories;
