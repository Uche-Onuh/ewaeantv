import React, { useState } from "react";
import { Dark } from "../../components";
import { Link } from "react-router-dom";
import { movieTags } from "../../constants";

const Preference = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tagId) => {
    // Check if the tag is already selected
    if (selectedTags.includes(tagId)) {
      // If it is selected, remove it from the selected tags
      setSelectedTags(selectedTags.filter((id) => id !== tagId));
    } else {
      // If it is not selected, add it to the selected tags if less than 4 tags are selected
      if (selectedTags.length < 4) {
        setSelectedTags([...selectedTags, tagId]);
      }
    }
  };

  const isSelected = (tagId) => {
    // Check if the tag is selected
    return selectedTags.includes(tagId);
  };

  const submitPreference = (e) => {
    e.preventDefault();
    console.log(selectedTags);
  };

  return (
    <section className="flex justify-center items-center h-[100vh]">
      <Dark />
      <div className="w-1/2 bg-[#F5F5F5] h-[100%] p-[50px]">
        <div className="flex justify-end mb-[150px]">
          <p className="font-normal text-[16px] leading-[21.79px]">
            <Link to={"/user-account/login"} className="font-bold underline">
              Skip interest
            </Link>
          </p>
        </div>

        <div className="w-[547px] h-[587px] mx-auto bg-[#fff] px-11 py-24 rounded-[32px] text-center">
          <h1 className="mb-2 font-bold text-[24px] leading-[31.25px]">
            Select interest
          </h1>
          <p className="mb-10 font-normal text-base">
            Select up to 4 topics of interest
          </p>

          <form action="">
            <div className="flex justify-center gap-3 flex-wrap w-4/5 mx-auto">
              {movieTags.map((tag) => (
                <div
                  className={`py-2 px-4 cursor-pointer border rounded-[3px] ${
                    isSelected(tag.id)
                      ? "border-secondary bg-secondary text-white"
                      : "border-secondary"
                  }`}
                  key={tag.id}
                  onClick={() => handleTagClick(tag.id)}
                >
                  {tag.title}
                </div>
              ))}
            </div>

            <button
              type="submit"
              //   disabled={isSubmitting}
              className="bg-secondary text-white w-[70%] rounded-[10px] py-[15px] px-[21px] text-[16px] leading-[20.83px] font-normal my-6"
              onClick={submitPreference}
            >
              {/* {isSubmitting ? "Submitting..." : "Get started"} */}
              Confirm
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Preference;
