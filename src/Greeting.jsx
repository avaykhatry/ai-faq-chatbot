function Greeting() {
  return (
    <div>
      <h1>Curious about something?</h1>
      <div className="logo-btm flex py-1 gap-2 items-center">
        <div className="copy cursor-pointer">
          <img src="src/assets/copy-svgrepo-com.svg" width="22px" alt="" />
        </div>
        <div className="like cursor-pointer">
          <img src="src/assets/like-svgrepo-com.svg" width="22px" alt="" />
        </div>
        <div className="dislike cursor-pointer">
          <img src="src/assets/dislike-svgrepo-com.svg" width="22px" alt="" />
        </div>
        <div className="speak cursor-pointer">
            <img src="src/assets/speaker-2-svgrepo-com.svg" width="22px" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Greeting;
