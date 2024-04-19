import ReviewsItem from "./ReviewsItem";
import React from "react";
export default function Reviews(props) {
  const placeid = process.env.NEXT_PUBLIC_placeid;
  const placesAPIkey = process.env.NEXT_PUBLIC_placesAPIkey;
  const url = `https://cors-anywhere-is.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&key=${placesAPIkey}&language=en`;

  React.useEffect(() => {
    let isActive = true;
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        if (isActive) {
          const data = result.result;
          setReviews(data.reviews);
        }
      })
      .catch((error) => console.log(error.message));
    return () => {
      isActive = false;
    };
  }, []);

  const [reviews, setReviews] = React.useState([]);

  return (
    <div
      style={{ height: "calc(100% - 180px)" }}
      className={`fixed bottom-0 left-0 bg-white 2xl:w-1/4 lg:w-1/3 sm:w-1/2 w-3/4 p-5 z-20 shadow-inner border overflow-y-scroll`}
    >
      <div>
        {reviews.length < 1 ? (
          <div className={"loader"} />
        ) : (
          reviews
            .slice(0, 4)
            .map((item, index) => (
              <ReviewsItem item={item} index={index} key={index} />
            ))
        )}

        <div className="text-center">
          <a
            href="https://www.google.com/maps/place/Petsafe+Kennels+LLC/@33.6055497,-112.4547192,10z/data=!3m1!4b1!4m6!3m5!1s0x872b6d29e167a43f:0x204edc64916ba923!8m2!3d33.6054149!4d-112.125051!16s%2Fg%2F11d_dhptj6?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 text-sm"
          >
            More reviews
          </a>
        </div>
      </div>
    </div>
  );
}
