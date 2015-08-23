module Point
{
    interface IPoint
    {
        X: number;
        Y: number;
        Graphable: boolean;
        //color: Color.Color;
    }

    export class Point implements IPoint
    {
        private x: number = 0;
        private y: number = 0;
        private graphable: boolean = false;
        //color = null;

        constructor(x: number, y: number, color: string = null)
        {
            this.x = x;
            this.y = y;

            if (color != null)
            {
                //this.color = new Color.Color();

            }
        }

        public set X(ptx: number)
        {
            this.x = ptx;
        }

        public get X()
        {
            return this.x;
        }

        public set Y(pty: number)
        {
            this.y = pty;
        }

        public get Y()
        {
            return this.y;
        }

        public set Graphable(t: boolean)
        {
            this.graphable = t;
        }

        public get Graphable()
        {
            return this.graphable;
        }
    }
}