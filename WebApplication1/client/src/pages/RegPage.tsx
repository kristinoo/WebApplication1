import { useState } from "react";
import RegistrationForm from "../components/RegistrationForm";

const RegPage = () => {
    const [isRegPage, setIsRegPage] = useState(true);

    return (
        <RegistrationForm />
    )
}

export default RegPage;