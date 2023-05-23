export default function FindPeopleService()
{
    this.GetAll = async function()
    {
        const response = await fetch('http://localhost:5163/api/v1/users/get-all')
        const allUsers= await response.json();

        return allUsers;
    }
}