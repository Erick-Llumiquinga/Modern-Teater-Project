<?php

namespace App\Http\Controllers;

    use App\Reservas;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\DB;
    Use Exception;
    use Illuminate\Database\Eloquent\ModelNotFoundException;
    use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
    
    class ReservasController extends Controller{
        
        public function createReserva(Request $request){
            //-- Mediante Eloquent--//
            try{
                DB::beginTransaction();
                $data = $request->json()->all();
                $reserva = Reservas::create([
                    'id_persona'=>$data['id_persona'],
                    'id_obra'=>$data['id_obra'],
                    'id_horario'=>$data['id_horario'],
                    'id_obra'=>$data['id_sala'],
                ]);
                DB::commit();
            }
            catch(Exception $e){
                return response()->json($e, 400);
            }
            return response()->json($reserva, 201);
        }

        public function getAll(Request $request){


            $reserva = Reservas::all();
            return response()->json($reserva,200);
        }
        
        public function delete(Request $request){
            $data = $request->json()->all();
            $id = $data['id'];
            return Reservas::destroy($id);
        }
    }
?>