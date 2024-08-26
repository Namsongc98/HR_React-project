import React from 'react'
import TitleComponent from '../../components/componentUI/TitleComponent'

export const Dashboard = () => {
  return (
    <>
      <div className="row justify-space-between align-center">
        <TitleComponent title='Dashboard' />
        <div className="wrapper_date-week display-flex align-center">
          {/* <date-pick-type-week /> */}
        </div>
      </div>
      {/* <div className="row">
        <div className="row gap-0_2 mt-2_4 mb-2_4 w-full">
          <div className="col-xl-3">
            <div className="paper-bg p-1_6">
              <p className="font-md text-gray">{'item.title'}</p>
              <h4 className="font-xl">{'item.count'}</h4>
            </div>
          </div>
        </div>
        <div className="row w-full gap-24">
          <div className="row col-xl-8">
            <div className="w-full">
              <div className="paper-bg p-1_2">
                <div className="display-flex align-center justify-space-between">
                  <p className="font-xl text-black font-6">New applicants</p>
                  <span
                  className="font-md text-blue font-4"
                  activeClassName="is-active"
                  exactActiveClassName="is-active"
                  to="/applicants"
                  >Show more</span>
                </div>
                <div className="display-flex align-center justify-space-between">
                 <div className="">table</div>
                </div>
              </div>
            </div>
            <div className="w-full mt-2_4">
              <div className="paper-bg p-1_2">
                <div className="display-flex align-center justify-space-between">
                  <p className="font-xl text-black font-6">New applicants</p>
                  <p className="font-md text-blue font-4">Show more</p>
                </div>
                <div className="display-flex align-center justify-space-between">
                 <span>table</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="paper-bg p-1_6 scrollbar-custom wp__left-side">
              <p className="font-xl font-6 text-black">To interview today (12)</p>
              <div className="pt-1_2 pb-1_2">
                <div className="wp__item-inter">
                  <div className="row justify-space-between align-center">
                    <div className="row">
                      <span className="font-6">John Doe</span>
                      <span className="text-orange ml-0_8">Waiting for Round 1</span>
                    </div>
                    <span className="text-gray">15:30</span>
                  </div>
                  <div className="">
                    <span className="text-gray title-interview">Job title:</span>
                    <span className="truncate">Web App Developer (PHP/C#/.Net/J...</span>
                  </div>
                  <div className="">
                    <span className="text-gray title-interview">Department:</span>
                    <span className="truncate">Tech Department</span>
                  </div>
                  <div className="">
                    <span className="text-gray title-interview">Interviewer:</span>
                    <span className="truncate">Christopher</span>
                  </div>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
