<?php
    namespace App\Http\Controllers;

    use App\Usuario;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\DB;

    class UsuarioController extends Controller{

        public function getUsuario(Request $request){
            $usuario = Usuario::all();
            return response()->json($usuario,200);
        }
    }
?>