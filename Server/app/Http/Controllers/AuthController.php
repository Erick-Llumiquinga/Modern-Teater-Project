<?php
    namespace App\Http\Controllers;

    use Illuminate\Http\Request;
    use Validator;
    use Exception;
    use App\Persona;
    use App\Usuario;
    use App\Admin;
    use Illuminate\Support\Facades\Hash;
    use Illuminate\Support\Facades\DB;
    use Illuminate\Support\Facades\Mail;
    use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
    use Illuminate\Database\Eloquent\ModelNotFoundException;

    class AuthController extends Controller{

        function register(Request $request){
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
                return response()->json($e,400);
            }
            return response()->json($persona,201);
        }

        function registerUsuario(Request $request){
            try{
                DB::beginTransaction();
                $data = $request->json()->all();
                $usuario = Usuario::create([
                    $id_usuario = $data['id_persona']
                ]);
                DB::commit();
                }
            catch(Exception $e){
                return response()->json($e, 400);
            }

            return response()->json($usuario, 201);
        }

        function login(Request $request){
    
                $data = $request->json()->all();
                $correo = $data['correo'];
                $clave = $data['clave'];
                $usuario = Persona::where('correo',$correo)->first();
                if(!$usuario){
                    return response()->json(['error' => 'Credenciales Incorrectas'],400);
                }
                if($clave === $usuario->clave){

                    return response()->json(
                        ['id' => $usuario->id,
                        'nombre' => $usuario->nombre],
                        200);
                }
                else{
                    return response()->json(['status' => 'Credenciales Incorrectas'],400);
                }
        }

        function loginAdmin(Request $request){
            $data = $request->json()->all();
            $correo = $data['correo'];
            $clave = $data['clave'];
            $admin = Admin::where('correo', $correo)->first();
            if(!$admin){
                return response()->json(['error' => 'Credenciales Incorrectas'],400);
            }
            if($clave === $admin->clave){
                return response()->json([
                    'id' => $admin->id,
                    'correo' => $admin->correo
                ],200);
            }
            else{
                return response()->json(['status' => 'Credenciales Incorrectas'],400);
            }
        }
    }
?>