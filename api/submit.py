import json
import psycopg2
import os

def handler(req, res):
    if req['method'] == 'POST':
        # Establish the connection to the PostgreSQL database
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cursor = conn.cursor()

        try:
            # Parse the incoming JSON body
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

            # Insert suggestion into the database
            cursor.execute(
                'INSERT INTO suggestions(suggestion) VALUES (%s) RETURNING *',
                (suggestion,)
            )

            # Fetch the inserted row
            result = cursor.fetchone()

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
            # Close database connection
            cursor.close()
            conn.close()

    else:
        return res(
            status=405,
            json={
                'success': False,
                'message': 'Method Not Allowed'
            }
        )
