import json
import asyncpg
import os
import asyncio

async def handler(req, res):
    if req['method'] == 'POST':
       
        conn = await asyncpg.connect(os.environ['DATABASE_URL'])
        
        try:
           
            body = json.loads(req['body'])
            suggestion = body.get('suggestion', '').strip()

            if not suggestion:
                return res(
                    status=400,
                    json={
                        'success': False,
                        'message': 'Suggestion is required'
                    }
                )

           
            result = await conn.fetch(
                'INSERT INTO suggestions(suggestion) VALUES ($1) RETURNING *',
                suggestion
            )

            return res(
                status=200,
                json={
                    'success': True,
                    'message': 'Suggestion received!',
                    'data': result
                }
            )

        except Exception as error:
            print('Error inserting suggestion:', error)
            return res(
                status=500,
                json={
                    'success': False,
                    'message': 'Internal Server Error'
                }
            )
        finally:
            
            await conn.close()

    else:
        return res(
            status=405,
            json={
                'success': False,
                'message': 'Method Not Allowed'
            }
        )


