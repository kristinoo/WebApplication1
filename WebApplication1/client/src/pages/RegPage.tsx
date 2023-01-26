import React, { useState } from "react";
import RegistrationForm from "../components/RegistrationForm";
import ProfileForm from "../components/ProfileForm";
import ChangeProfile from "../components/ChangeProfile";

const RegPage = () => {
    const [isRegPage, setIsRegPage] = useState(true);

    return (
        <ChangeProfile />
    )
}

export default RegPage;