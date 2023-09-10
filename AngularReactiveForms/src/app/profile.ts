export class PersonalDetails {
    firstName: string;
    lastName: string;
    email: string;
}

export class Profile {
    personalDetails: PersonalDetails;
    gender: string;
    country: string;
    isSportsHobby: boolean;
    isMoviesHobby: boolean;
    isMusicHobby: boolean;
    skills: string[];
}