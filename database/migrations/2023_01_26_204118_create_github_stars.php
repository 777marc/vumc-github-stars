<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('github_stars', function (Blueprint $table) {
            $table->id();
            $table->integer('repository_id')->default(0);
            $table->string('name', 256);
            $table->string('url', 512);
            $table->dateTime('created_date');
            $table->dateTime('last_publish_date');
            $table->text('description');
            $table->integer("number_of_starts");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('github_stars');
    }
};
