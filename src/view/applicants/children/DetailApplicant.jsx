import React from 'react'
import TitleComponent from '../../../components/componentUI/TitleComponent'
import ButtonComponent from '../../../components/common/ButtonComponent'
import ProfileApply from '../component/ProfileApply'

const DetailApplicant = () => {

  const btnReject = {
    label: "Reject",
    styleBtn: "btn-gray",
    onClick() {
      // navigate("/job-requests/create-job-request");
    }
  }
  const btnSchedule1 = {
    label: "Schedule Round 1",
    styleBtn: "btn-blue",
    onClick() {
      // navigate("/job-requests/create-job-request");
    }
  }
  return (
    <div>
      <div className="row justify-space-between align-center">
        <div className="row align-center">
          <TitleComponent title="John Doe" backRouterBoolean={true} />
        </div>
        <div className="row wrapper_button">
          <ButtonComponent dataButton={btnReject} />
          <ButtonComponent dataButton={btnSchedule1} />
        </div>
      </div>
      <div className="row w-full gap-24 mt-24">
        <div className="row col-xl-8">
          <ProfileApply />
        </div>
        <div className="col-xl-4">
          <div className="paper-bg p-16 wrapper_left">
            <p className="font-xl font-600 text-black">Interview Information</p>
            {/* item right  */}
            <div className="p-12 bg-bg_layout mt-16">
              <h4>Round 1</h4>
              <div className="mt-04 mb-04">
                <span className="title_item">Time:</span>
                <span>12/07/2024, 15:30</span>
              </div>
              <div className="title_item">
                <span className="title_item">Interviewer:</span>
                <span>Christopher</span>
              </div>
              <div className="display-flex">
                <span className="title_item">Evaluation:</span>
                <div className="display-flex flex-column">
                  <div className="title_item">
                    <span className="evaluation-item_title">Appearance:</span>
                    <span className="font-600 font-md">Good</span>
                  </div>
                  <div className="title_item">
                    <span className="evaluation-item_title">Manne:</span>
                    <span className="font-600 font-md">Good</span>
                  </div>
                  <div className="title_item">
                    <span className="evaluation-item_title">Personality:</span>
                    <span className="font-600 font-md">Merit</span>
                  </div>
                  <div className="title_item">
                    <span className="evaluation-item_title">Knowledge/Skills:</span>
                    <span className="font-600 font-md">Good</span>
                  </div>
                  <div className="title_item">
                    <span className="evaluation-item_title">Experienc:</span>
                    <span className="font-600 font-md">Good</span>
                  </div>
                  <div className="title_item">
                    <span className="evaluation-item_title">Communication:</span>
                    <span className="font-600 font-md">Avg</span>
                  </div>
                  <div className="title_item">
                    <span className="evaluation-item_title">Language:</span>
                    <span className="font-600 font-md">Poor</span>
                  </div>
                </div>
              </div>
              <div className="">
                <span className="title_item">Comment:</span>
                <p className="">
                  Lorem ipsum dolor sit amet, adipiscing elit. Sed eget sem ut
                  elit euismod dignissim et nec lacus. Cras volutpat nibh justo,
                  quis tempor metus pulvinar nec. Aenean luctus feugiat odio, at
                  finibus erat fringilla ac. Vivamus sit amet nulla id dui dapibus
                  aliquet. Mauris sodales, leo sed fermentum gravida, erat ante
                  vulputate elit, id elementum massa nisl.
                </p>
              </div>
            </div>
            <div className="p-12 bg-bg_layout mt-08">
              <h4>Round 1</h4>
              <div className="title_item">
                <span className="evaluation-item_title">Time:</span>
                <span className="font-400 font-md">13/07/2024, 15:30</span>
              </div>
              <div className="title_item">
                <span className="evaluation-item_title">Interviewer:</span>
                <span className="font-400 font-md">Esther Howard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailApplicant