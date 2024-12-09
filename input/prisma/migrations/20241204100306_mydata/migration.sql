-- CreateTable
CREATE TABLE "mydata" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "option2" TEXT NOT NULL,
    "option3" TEXT NOT NULL,
    "checkboxes" TEXT NOT NULL,
    "contents" TEXT NOT NULL,
    "extrainput" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mydata_pkey" PRIMARY KEY ("id")
);
