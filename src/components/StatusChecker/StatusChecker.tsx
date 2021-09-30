// import axios, { AxiosResponse } from 'axios';
// import React, { useEffect, useState } from 'react';
import UserInfoForm from '../UserInfoForm/UserInfoForm';
import './StatusChecker.scss'

// export interface VeteranInterface {
// 	ssn: string,
// 	gender: string,
// 	last_name: string,
// 	birth_date: Date,
// 	first_name: string
// 	middle_name: string
// }

const StatusChecker = () => (
	<div className="status-checker">
		<h1>Complete the form below to determine VA status:</h1>
		<UserInfoForm />
	</div>
)


export default StatusChecker;
