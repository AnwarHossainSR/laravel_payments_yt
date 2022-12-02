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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->decimal('total', 8, 2)->nullable();
            $table->string('st_cus_id', 1024)->nullable();
            $table->string('st_sub_id', 1024)->nullable();
            $table->string('st_plan_id', 1024)->nullable();
            $table->string('st_invoice_id', 1024)->nullable();
            $table->string('st_payment_method', 1024)->nullable();
            $table->string('st_payment_status', 1024)->nullable();
            $table->string('date')->nullable();
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
        Schema::dropIfExists('payments');
    }
};
