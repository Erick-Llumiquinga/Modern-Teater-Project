<?php

namespace App\Http\Controllers;

    use App\Admin;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\DB;
    Use Exception;
    use Illuminate\Database\Eloquent\ModelNotFoundException;
    use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
    
    class AdminController extends Controller{
        
        public function createAdmin(Request $request){
            //-- Mediante Eloquent--//
            try{
                DB::beginTransaction();
                $data = $request->json()->all();
                $admin = Admin::create([
                    'correo'=>$data['correo'],
                    'clave'=>$data['clave'],
                ]);
                DB::commit();
            }
            catch(Exception $e){
                return response()->json($e, 400);
            }
            return response()->json($admin, 201);
        }

        public function getAll(Request $request){
            $admin = Admin::all();
            return response()->json($admin,200);
        }

        public function put(Request $request){
            try{
                DB::beginTransaction();
                $data = $request->json()->all();
                $admin = Admin::where('id', $data['id'])->update([
                    'correo'=>$data['correo'],
                    'clave'=>$data['clave']
                ]);
                DB::commit();
            }
            catch(Exception $e){
                return response()->json($e, 400);
            }
            return response()->json($admin, 200);
        }
        
        public function delete(Request $request){
            $data = $request->json()->all();
            $id = $data['id'];
            return Admin::destroy($id);
        }
    }
?>





            




            