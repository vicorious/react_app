const BASE_API = 'http://dummy.restapiexample.com/api/v1/employees';

const BASE_API_ID = 'http://dummy.restapiexample.com/api/v1/employee/';

class Api
{
	async getEmployeesId(id)
	{		
		const URL_ACTIVATE = `${BASE_API_ID}${id}`;				
		
		const query = await fetch(`${BASE_API_ID}${id}`)
		
		const data = await query.json();				
		
		return data;
	}
	
	async getEmployees()
	{		
		const URL_ACTIVATE = `${BASE_API}`;				
		
		const query = await fetch(`${BASE_API}`)
		
		const data = await query.json();			
		
		return data;
	}	
	
}

export default new Api();