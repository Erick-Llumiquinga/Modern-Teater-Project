<?php

namespace App\Http\Controllers;

    use App\Salas;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\DB;
    Use Exception;
    use Illuminate\Database\Eloquent\ModelNotFoundException;
    use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

    class SalasController extends Controller{

        public function createSala(Request $request){
            //-- Mediante Eloquent--//
            try{
                DB::beginTransaction();
                $data = $request->json()->all();
                $sala = Salas::create([
                    'nombre'=>$data['nombre'],
                    'detalles'=>$data['detalles'],
                    'asientos'=>$data['asientos'],
                    'id_admin'=>$data['id_admin']
                ]);
                DB::commit();
            }
            catch(Exception $e){
                return response()->json($e, 400);
            }
            return response()->json($sala, 201);
        }

        public function getAll(Request $request){
            $sala = Salas::all();
            return response()->json($sala,200);
        }

        public function put(Request $request){
            try{
                DB::beginTransaction();
                $data = $request->json()->all();
                $sala = Salas::where('id', $data['id'])->update([
                    'detalles'=>$data['detalles'],
                    'asientos'=>$data['asientos']
                ]);
                DB::commit();
            }
            catch(Exception $e){
                return response()->json($e, 400);
            }
            return response()->json($sala, 200);
        }
        
        public function delete(Request $request){
            $data = $request->json()->all();
            $id = $data['id'];
            return Salas::destroy($id);
        }
    }
?>
