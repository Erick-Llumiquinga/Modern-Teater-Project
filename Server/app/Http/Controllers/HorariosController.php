<?php

namespace App\Http\Controllers;

    use App\Horarios;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\DB;
    Use Exception;
    use Illuminate\Database\Eloquent\ModelNotFoundException;
    use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
    
    class HorariosController extends Controller{
        
        public function createHoarario(Request $request){
            //-- Mediante Eloquent--//
            try{
                DB::beginTransaction();
                $data = $request->json()->all();
                $horario = Horarios::create([
                    'horario'=>$data['horario'],
                    'id_admin'=>$data['id_admin'],
                ]);
                DB::commit();
            }
            catch(Exception $e){
                return response()->json($e, 400);
            }
            return response()->json($horario, 201);
        }

        public function getAll(Request $request){


            $horario = Horarios::all();
            return response()->json($horario,200);
        }

        public function put(Request $request){
            try{
                DB::beginTransaction();
                $data = $request->json()->all();
                $horario = Horarios::where('id', $data['id'])->update([
                    'horario'=>$data['horario']
                ]);
                DB::commit();
            }
            catch(Exception $e){
                return response()->json($e, 400);
            }
            return response()->json($horario, 200);
        }
        
        public function delete(Request $request){
            $data = $request->json()->all();
            $id = $data['id'];
            return Horarios::destroy($id);
        }
    }
?>