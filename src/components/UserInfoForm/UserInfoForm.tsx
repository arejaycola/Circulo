import axios, { AxiosResponse } from 'axios';
import React, { useState } from 'react'
import "./UserInfoForm.scss"

export interface VeteranInterface {
    ssn: string,
    gender: string,
    last_name: string,
    birth_date: string,
    first_name: string
    middle_name: string
}
// enum VeteranStatus {
//     "confirmed",
//     "not confirmed"
// }

interface VeteranStatus {
    veteran_status: string
}
const UserInfoForm = (): JSX.Element => {
    // const [userInfo, setUserInfo] = useState({} as VeteranInterface)
    const [firstName, setFirstName] = useState<string>('');
    const [middleName, setMiddleName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [birthDate, setBirthDate] = useState<string>('');
    const [ssn, setSsn] = useState<string>('');
    const [status, setStatus] = useState<VeteranStatus>()
    const onButtonClick = async (): Promise<void> => {
        // setUserInfo({
        //     last
        // })
        const userInfo: VeteranInterface = {
            "ssn": "796130115",
            "gender": "F",
            "last_name": "Ellis",
            "birth_date": "1967-06-19",
            "first_name": "Tamara",
            "middle_name": "E"
        }
        // const userInfo: VeteranInterface = {
        //     "ssn": "555-55-5555",
        //     "gender": "M",
        //     "last_name": "Doe",
        //     "birth_date": "1965-01-01",
        //     "first_name": "John",
        //     "middle_name": "Theodore"
        // }
        // const UserInfo: VeteranInterface = {
        //     first_name: firstName,
        //     last_name: lastName,
        //     middle_name: middleName,
        //     gender,
        //     birth_date: birthDate,
        //     ssn
        // }

        const response: AxiosResponse<VeteranStatus> = await axios.post<VeteranStatus>('https://sandbox-api.va.gov/services/veteran_confirmation/v0/status', userInfo, {
            headers: {
                "content-type": "application/json",
                "apikey": "WTL49eehXWUdgqGmDOgs2kErBNcm8c3f"
            }
        })

        setStatus(response.data)

    }

    return (
        <div>
            <div>
                <input type='text' placeholder="First Name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type='text' placeholder="Middle Name" required value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                <input type='text' placeholder="Last Name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <input type='text' placeholder="Gender" required value={gender} onChange={(e) => setGender(e.target.value)} />
                <input type='text' placeholder="Birth Date" required value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
                <input type='text' placeholder="Social Security Number" required value={ssn} onChange={(e) => setSsn(e.target.value)} />
                <button type="button" onClick={onButtonClick}>Enter</button>
            </div>
            <div>
                Status: {status?.veteran_status}
            </div>
        </div>
    )
}

export default UserInfoForm;