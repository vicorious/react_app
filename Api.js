const BASE_API = 'http://dummy.restapiexample.com/api/v1/employees';

const BASE_API_ID = 'http://dummy.restapiexample.com/api/v1/employee/';

class Api
{
	async getEmployeesId(id)
	{
		console.log()
		const URL_ACTIVATE = `${BASE_API_ID}${id}`;
		
		console.log(URL_ACTIVATE);
		
		const query = await fetch(`${BASE_API_ID}${id}`)
		
		const data = await query.json();
		
		console.log(data);
		
		return data;
	}
	
	async getEmployees()
	{
		console.log()
		const URL_ACTIVATE = `${BASE_API}`;
		
		console.log(URL_ACTIVATE);
		
		const query = await fetch(`${BASE_API}`)
		
		const data = await query.json();
		
		console.log(data);
		
		return data;
	}	
	
}

export default new Api();