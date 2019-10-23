export interface Children {
    name: string,
    age: number
}
export interface Passenger{
    id: number,
    fullName: string,
    checkedIn : Boolean,
    checkInDate?: Number,
    children?: Children[] | null
};