import React from 'react'
import ItemProfile from './Item-profile/ItemProfile'
import DividerComponent from '../../../components/componentUI/DividerComponent'
import ItemPermitObtained from './Item-profile/ItemPermitObtained'
import ItemEducation from './Item-profile/ItemEducation'
import ItemLanguages from './Item-profile/ItemLanguages'

const ProfileApply = () => {
    return (
        <div className="w-full">
            <div className="paper-bg p-12">
                <div className="display-flex align-center justify-space-between">
                    <p className="font-xl text-black font-6">Candidate information</p>
                    <p className="font-md  font-4">
                        <span className="text-gray_text">Status:</span>   <span className="text-blue">New</span>
                    </p>
                </div>
                <div className="">
                    <div className="pt-16">
                        <ItemProfile />
                    </div>
                    <DividerComponent marginSize="20" heightSize="2" />
                    <div className="">
                        <h4 className="">Personal Particulars</h4>
                        <ItemProfile />
                    </div>
                    <DividerComponent marginSize="20" heightSize="2" />
                    <h4 className="mt-2 mb-2">Work experience (from the latest employment)</h4>
                    <div className="">
                        <div className="pt-08 pb-08">
                            <h1 className="font-7 font-lg">AAA Company</h1>
                            <ItemProfile />
                        </div>
                        <div className="pt-08 pb-08">
                            <h1 className="font-7 font-lg">AAA Company</h1>
                            <ItemProfile />
                        </div>
                        <div className="pt-08 pb-08">
                            <h1 className="font-7 font-lg">AAA Company</h1>
                            <ItemProfile />
                        </div>
                    </div>
                    <DividerComponent marginSize="20" heightSize="2" />
                    <h4 className="mt-2 mb-12">License / Permit obtained</h4>
                    <div className="">
                        <ItemPermitObtained />
                        <ItemPermitObtained />
                        <ItemPermitObtained />
                    </div>
                    <DividerComponent marginSize="20" heightSize="2" />
                    <h4 className="mt-2 mb-12">Education Background</h4>
                    <div className="">
                        <ItemEducation />
                        <ItemEducation />
                        <ItemEducation />
                    </div>
                    <DividerComponent marginSize="20" heightSize="2" />
                    <h4 className="mt-2 mb-12">Other Qualification Attained</h4>
                    <div className="">
                        <ItemEducation reverse={true} />
                        <ItemEducation reverse={true} />
                        <ItemEducation reverse={true} />
                    </div>
                    <DividerComponent marginSize="20" heightSize="2" />
                    <h4 className="mt-2 mb-12">Other Qualification Attained</h4>
                    <div className="">
                        <ItemLanguages />
                        <ItemLanguages />
                        <ItemLanguages />
                    </div>
                    <DividerComponent marginSize="20" heightSize="2" />
                    <h4 className="mt-2 mb-12">Skill</h4>
                    <div className="">
                        <div className="pt-08 pb8">
                            <h1 className="font-7 font-lg">Computer</h1>
                            <ItemProfile />
                        </div>
                        <div className="pt-08 pb8">
                            <h1 className="font-7 font-lg">Teamwork</h1>
                            <ItemProfile />
                        </div>
                        <div className="pt-08 pb8">
                            <h1 className="font-7 font-lg">Mangement</h1>
                            <ItemProfile />
                        </div>
                    </div>
                    <DividerComponent marginSize="20" heightSize="2" />
                    <h4 className="mt-2 mb-12">Referees</h4>
                    <div className="">
                        <div className="pt-08 pb8">
                            <h1 className="font-7 font-lg">Tom Hauster</h1>
                            <ItemProfile />
                        </div>
                        <div className="pt-08 pb8">
                            <h1 className="font-7 font-lg">Danniel</h1>
                            <ItemProfile />
                        </div>
                    </div>
                    <DividerComponent marginSize="20" heightSize="2" />
                    <h4 className="mt-2 mb-12">General Information</h4>
                    <div className="pt-08 pb8">
                        <div className="pt-08 pb8">
                            <h4 className="mb-04 font-7 font-lg">
                                Please state your channel of application
                            </h4>
                            <p>Staff Referral</p>
                        </div>
                        <div className="pt-08 pb8">
                            <h4 className="mb-04 font-7 font-lg">
                                Are you our ex-employee? If yes, please state your position and
                                service period
                            </h4>
                            <p>No</p>
                        </div>
                        <div className="pt-08 pb8">
                            <h4 className="mb-04 font-7 font-lg">
                                Have you ever been found guilty of any offence in a court of law
                                in Hong Kong or other place? If yes, please state details.
                            </h4>
                            <p>No</p>
                        </div>
                        <div className="pt-08 pb8">
                            <h4 className="mb-04 font-7 font-lg">
                                Have you ever been found guilty of any offence in a court of law
                                in Hong Kong or other place? If yes, please state details.
                            </h4>
                            <p>No</p>
                        </div>
                        <div className="pt-08 pb8">
                            <h4 className="mb-04 font-7 font-lg">I confirm and agree that:</h4>
                            <ol type="1" className="pl-08">
                                <li>
                                    1.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    eget sem ut elit euismod dignissim et nec lacus.
                                </li>
                                <li>
                                    2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    eget sem ut elit euismod dignissim et nec lacus.
                                </li>
                                <li>
                                    3.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    eget sem ut elit euismod dignissim et nec lacus.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileApply
