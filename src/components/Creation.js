import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import Nav from '../partials/Nav';

function Creation() {
    return (
        <div className="wrapper">
            <Nav />
            <div className="main">
                <div className="box">
                    <h3>Applying</h3>
                    <h4>Written</h4>
                    <p>​The below is the form outline.</p>
                    <blockquote>
                        <b><u>General Information</u></b><br />
                        <b>Name:</b> [first, last]<br />
                        <b>Gender:</b> [female/male]<br />
                        <b>Pronouns:</b> [if any]<br />
                        <b>Age:</b> [must be at least 18+]<br />
                        <b>Height:</b> [in UI metrics and SI units]<br />
                        <b>Weight:</b> [in UI metrics and SI units]<br />
                        <b>Job:</b> [job name]<br /><br />
                        <b><u>Personal Information</u></b><br />
                        <b>Personality</b><br />Minimum of 3 core personalities. It can be a mixed variety of negative or positive traits. Briefly explain how those personalities apply to your character. List form is fine.<br /><br />
                        <b>History</b><br />The content of your history needs to be a backstory of your character’s basic childhood or how they have become who they are now. In addition, we are looking for characters that will closely match their job descriptions. Please do not put dramatic backstory (you are allowed if we ask you details about it before letting you write one). Your character has to be a resident of the village. If you really want your character to be an outlander and wishes to settle down at the village, you have to explain why they chose to apply for residency.<br />If you have a long history, please provide us the history section on a separate document. The application should allow up to 3 paragraphs so it is easier for us to judge the applicants. You are free to provide a link of your character’s history if necessary.<br /><br />
                        <b>Miscellaneous</b><br />This is <em>optional</em>. This section can include dislikes/likes, strengths/weaknesses, or trivias.<br /><br />
                        <b>*You need to write down your current timezone (with GMT+ equivalent) and your preferred RP method.</b>
                    </blockquote>
                    <h4>Art</h4>
                    <p><b>Full-body</b><br />A full body reference is required. The artwork should be clean and colored. All artwork should be drawn by you or it can be a work you have permission to use (with proper credit). However, this is also an Art-based group, so we hope you can draw on your own. Only full body art is needed for the app, so please don't include side sketches such as character details. You can definitely draw them using an extra template that will be provided but please don’t submit it (it will just be for your own and others’ reference). Upload it somewhere and include it in the description of the main app if you wish. We only want the art applications to look uniform.</p>
                    <p><b>Headshot</b><br />A headshot is required. Please keep them neat.</p>
                    <p><b>Design</b><br />You may choose to illustrate what your character’s design should look like. Overall, this is a free-form RP group. However, we do want you to present us a village-look instead of city folks. If you don’t know, ask us to check.</p>
                    <p><b>Other</b><br/>You can put color references for people to easily access them. Please do not doodle or draw other things, we want to keep a clean application for the group so it looks nice and consistent.</p>
                </div>
                <div className="box">
                    <h3>Joining</h3>
                    <p>You’ve decided to take the path to the village.<br />Allow up to a brief period of invitations to the official Wistea Village Discord server.</p>
                    <p>After the joining period has arrived, you will need to submit your request to DeviantArt. Once you are accepted, you will have access to submit your Deviation to the group folders. You will also be granted access to other platforms including Discord server and Character Inventories, etc.</p>
                    <p>On your Join request, please list in the following order:</p>
                    <blockquote>
                        <b>NAME:</b> [your preferred username/name]<br />
                        <b>DISCORD ID:</b> [xx#1234]<br />
                        <b>CHARACTER NAME:</b> [full name]<br />
                        <b>JOB:</b> [job name]<br />
                        <b>APP LINK:</b> [sta.sh and other platforms]
                    </blockquote>
                </div>
            </div>
        </div>
    );
}

export default Creation;