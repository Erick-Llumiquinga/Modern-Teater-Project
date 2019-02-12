<?php

namespace App\Http\Controllers;

    use App\Obras;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\DB;
    Use Exception;
    use Illuminate\Database\Eloquent\ModelNotFoundException;
    use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

    class ObrasController extends Controller{

        public function createObra(Request $request){
            //-- Mediante Eloquent--//
            try{
                DB::beginTransaction();
                $data = $request->json()->all();
                $obra = Obras::create([
                    'nombre'=>$data['nombre'],
                    'detalles'=>$data['detalles'],
                ]);
                DB::commit();
            }
            catch(Exception $e){
                return response()->json($e, 400);
            }
            return response()->json($obra, 201);
        }

        public function getAll(Request $request){


            $obra = Obras::all();
            return response()->json($obra,200);
        }

        public function put(Request $request){
            try{
                DB::beginTransaction();
                $data = $request->json()->all();
                $obra = Obras::where('id', $data['id'])->update([
                    'detalles'=>$data['detalles']
                ]);
                DB::commit();
            }
            catch(Exception $e){
                return response()->json($e, 400);
            }
            return response()->json($obra, 200);
        }
        
        public function delete(Request $request){
            $data = $request->json()->all();
            $id = $data['id'];
            return Obras::destroy($id);
        }
    }
?>
