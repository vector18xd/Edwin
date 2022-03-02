package com.example.saludoapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val miBtn:Button=findViewById(R.id.btn)
        miBtn.setOnClickListener{onClick()}
    }
    private fun onClick(){
        val cText:EditText=findViewById(R.id.editTextTextPersonName)
        var nombre: String=cText.text.toString()
        Toast.makeText(this,"Bienvenido $nombre",Toast.LENGTH_LONG).show()
    }
}