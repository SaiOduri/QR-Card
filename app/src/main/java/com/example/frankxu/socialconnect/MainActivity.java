package com.example.frankxu.socialconnect;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity implements View.OnClickListener{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        View scanBtn = findViewById(R.id.scan_btn);
        scanBtn.setOnClickListener(this);
    }

    @Override
    public void onClick(View view) {
        switch(view.getId()) {
            case R.id.scan_btn:
                Intent intent = new Intent(this, CameraActivity.class);
                startActivity(intent);
                break;
        }
    }
}
