<?php

namespace App\Http\Controllers;

    use App\Persona;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\DB;
    Use Exception;
    use Illuminate\Database\Eloquent\ModelNotFoundException;
    use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

    class PersonasController extends Controller{

        /*public function createUser(Request $request){
            //-- Mediante Eloquent--//
            try{
                DB::beginTransaction();
                $data = $request->json()->all();
                $persona = Persona::create([
                    'nombre'=>$data['nombre'],
                    'apellido'=>$data['apellido'],
                    'correo'=>$data['correo'],
                    'clave'=>$data['clave']
                ]);
                DB::commit();
            }
            catch(Exception $e){
                return response()->json($e, 400);
            }
            return response()->json($persona, 201);
        }*/

        public function getAll(Request $request){


            $persona = Persona::all();
            return response()->json($persona,200);
        }

        public function put(Request $request){
            try{
                DB::beginTransaction();
                $data = $request->json()->all();
                $persona = Persona::where('id',$data['id'])->update([
                    'nombre' => $data['nombre'],
                    'apellido' => $data['apellido'],
                    'correo' => $data['correo'],
                    'clave' => $data['clave']
                ]);
                DB::commit();
            }
            catch(Exception $e){
                return response()->json($e, 400);
            }
            return response()->json($persona, 200);
        }

        public function delete(Request $request){
            $data = $request->json()->all();
            $id = $data['id'];
            return Persona::destroy($id);
        }
    }
?>
