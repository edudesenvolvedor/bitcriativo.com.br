-- CreateTable
CREATE TABLE "request_quotes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "request_quotes_pkey" PRIMARY KEY ("id")
);
