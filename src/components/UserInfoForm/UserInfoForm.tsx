import axios, { AxiosResponse } from 'axios';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { VeteranStatus } from '../../types/types';
import Button from '../../ui/Button/Button';
import InputGroup from '../../ui/InputGroup/InputGroup';
import './UserInfoForm.scss';

export interface VeteranInterface {
	ssn: string;
	gender: string;
	last_name: string;
	birth_date: string;
	first_name: string;
	middle_name: string;
}

const UserInfoForm = ({ setError, setStatus }: { setStatus: (status: VeteranStatus) => void; setError: (error: boolean) => void }): JSX.Element => {
	const [userInfo, setUserInfo] = useState<VeteranInterface>({
		ssn: '',
		gender: '',
		last_name: '',
		first_name: '',
		middle_name: '',
		birth_date: '',
	});

	const onFormSubmit = async (e: FormEvent): Promise<void> => {
		e.preventDefault();

		const { data }: AxiosResponse = await axios.post('https://sandbox-api.va.gov/services/veteran_confirmation/v0/status', userInfo, {
			headers: {
				'content-type': 'application/json',
				apikey: 'WTL49eehXWUdgqGmDOgs2kErBNcm8c3f',
			},
		});

		if (data) {
			setError(false);
			setStatus(data);
		} else {
			setError(true);
		}
	};

	return (
		<div className="user-info">
			<form className="user-info-form" action="#" onSubmit={onFormSubmit}>
				<div className="user-info__inputs">
					<InputGroup
						label="First Name"
						id="first-name"
						type="text"
						required
						value={userInfo.first_name}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setUserInfo({ ...userInfo, first_name: e.target.value })}
					/>

					<InputGroup
						id="middle-name"
						label="Middle Name"
						type="text"
						required
						value={userInfo.middle_name}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setUserInfo({ ...userInfo, middle_name: e.target.value })}
					/>
					<InputGroup
						type="text"
						required
						value={userInfo.last_name}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setUserInfo({ ...userInfo, last_name: e.target.value })}
						id="last-name"
						label="Last Name"
					/>
					<InputGroup
						type="text"
						required
						value={userInfo.gender}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setUserInfo({ ...userInfo, gender: e.target.value })}
						id="gender"
						label="Gender"
					/>
					<InputGroup
						type="text"
						required
						value={userInfo.birth_date}
						placeholder="YYYY-MM-DD"
						onChange={(e: ChangeEvent<HTMLInputElement>) => setUserInfo({ ...userInfo, birth_date: e.target.value })}
						id="birth-date"
						label="Birth Date"
					/>
					<InputGroup
						type="text"
						required
						value={userInfo.ssn}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setUserInfo({ ...userInfo, ssn: e.target.value })}
						id="ssn"
						label="SSN"
					/>
					<Button>Submit</Button>
				</div>
			</form>
		</div>
	);
};

export default UserInfoForm;
