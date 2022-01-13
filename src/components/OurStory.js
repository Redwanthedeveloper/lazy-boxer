import React from "react";

const OurStory = () => {
  return (
    <>
      <div id="story" className="my-32">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="story grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div
              className="border-4 border-secondary rounded-tr-3xl rounded-bl-3xl p-4"
              data-aos="flip-down"
              data-aos-duration="1000"
            >
              <h1 className="text-center text-4xl font-extrabold text-secondary uppercase font-heading py-4">
                our story
              </h1>
              <p className="text-left text-xl font-normal text-default py-4 font-body">
                Who would ever think a laid back sad eyed gentleman named
                Winford Boxward would become the Lazy Boxer. A story about a
                geeky bright-eyed gaming programmer who creates a virtual boxer
                to fight for a good cause. Winford won and was awarded a crypto
                wallet that changed his life forever. It is with this spirit
                that the Lazy Boxer was created. The Lazy Boxer became a crypto
                rock star and an advocate for other crypto lazy boxers who
                personifies him in the metaverse sports world boxing arena.
              </p>
            </div>
            <div
              className="border-4 border-secondary rounded-tr-3xl rounded-bl-3xl p-4 font-heading"
              data-aos="flip-up"
              data-aos-duration="1000"
            >
              <h1 className="text-center text-4xl font-extrabold text-secondary  py-4 uppercase">
                league
              </h1>
              <p className="text-left text-xl font-normal text-default py-4 font-body">
                All Lazy Boxers Nft works of art owners have the best of two
                worlds. Lazy Boxer(s) are avatars in the metaverse with freewill
                and can freely interact with others engaging on live crypto
                exchanges in regard to buying, selling and trading virtual
                assets within the Lazy Boxer’s membership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
