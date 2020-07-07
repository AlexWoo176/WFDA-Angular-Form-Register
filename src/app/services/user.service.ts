import {Injectable} from '@angular/core';
import {User} from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  checkLogin = 'true';
  userOnline: User = {
    name: 'Alex Woo',
    email: 'alexvu@codegym.com.vn',
    password: '123456',
    age: 30,
    address: 'Hà Nội',
    // tslint:disable-next-line:max-line-length
    image: 'https://danviet.mediacdn.vn/upload/1-2018/images/2018-03-24/2-kieu-trinh-1-1521880520-width650height650.jpg',
    status: false
  };
  user: User[] = [
    {
      name: 'Alex Woo',
      email: 'alexvu@codegym.com.vn',
      password: '123456',
      age: 30,
      address: 'Hà Nội',
      // tslint:disable-next-line:max-line-length
      image: 'https://danviet.mediacdn.vn/upload/1-2018/images/2018-03-24/2-kieu-trinh-1-1521880520-width650height650.jpg',
      status: false
    },
    {
      name: 'Dang Linh',
      email: 'linhdp@codegym.com.vn',
      password: '123456',
      age: 18,
      address: 'Tokyo',
      // tslint:disable-next-line:max-line-length
      image: 'https://1.bp.blogspot.com/-7ATzJ-Kl25I/XQO4skCtCfI/AAAAAAAAAfQ/K4ZzZxSnZi8doQd5fdV_d1cVvjAxqxmQQCLcBGAs/s400/hotgirl-vn-cam-1.jpg',
      status: false
    },
    {
      name: 'Bao Hung',
      email: 'hunglb@codegym.com.vn',
      password: '123456',
      age: 18,
      address: 'nghệ an',
      // tslint:disable-next-line:max-line-length
      image: 'https://kenh14cdn.com/2017/1799057418685014967347478689345437027425205o-1511954301755.jpg',
      status: false
    },
    {
      name: 'Vang Anh',
      email: 'linhhm@codegym.com.vn',
      password: '123456',
      age: 24,
      address: 'sài gòn',
      // tslint:disable-next-line:max-line-length
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMVFhUXGBgXFRgXGBgYFxcXGhgXGBkYGBoYHSggGBolHRgXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGCsdHR0tKy0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tNy0rLS03NysrLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYHAQj/xABGEAABAwEEBwUFBAkCBQUAAAABAAIRAwQSITEFQVFhcYGRBiKhscETMlLR8AdCYuEUI3KCkqKywvFT0hUzQ7PiFiQ0c6P/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAiEQEBAAIDAAIDAQEBAAAAAAAAAQIRAyExEkETMmFRcQT/2gAMAwEAAhEDEQA/AO3IQhNQQhCAEIQgBCEIAQglZDtHpt7ppUdeBcDHHGcPlPBOTYWum+09ns3de+8/4GC87gYwaeMLnmnftIrvkUGik2YvHvO4DUHZ4C9Cj26yCmIzO7A1HfCPhZ/tvHKFmtN3qcAQXxA+GmDsB+9jmchGZkipIfxV+l+0Ndzzeq1HPOcmCTAGIbgBGQz161Ti31vjcM8lOs+jjdvRJeQATvgzJ4g8iNaRUskCRr16g2JB4n3ug1Qq1D3Uanpao3AG9GGO/hGO/epmjrUXviADkNgnP0CoxJMxgBgNmoeJxO9SqLDAIMOwAx6pUernSFjA92T1/wAk/M4KLQ0vWpHuvMbCcCBt24ZKK+3ObN4l2olD2Xmy3+YATwxKVkp7sb3s7av0se+CQYIcSXsJ24YgiYORiMDgtM/Q4ZSfeN7MQBGoznO7VrC4zYbU+jUD2EtcNYJy1tJGox1AXV+zmlGVaF4OLi4AvvGXBwwuHHDvR6YELj5sPj/x08XJtaaGfRrU/aVHNYbzmkXmjLI97cQpLzZBm9p4En+lZ11iYxxz35TswMcOidpCznMuB2HDxAxXPZG8t+6m2u1WN0C6HicRdJ631nH0CTuxwn5K3izSCGzs9+PHBWH6KPhb0CJn8TuO2cs7Lsp1145A8leVKTgMIHh6KC6q4HvVaTf3sfEhHy2fipsdZoMPqYY5mTwTg0lZwe88ngH+gTdSy2QZ1pO4tPkFDebK0+8XDg4eQCrUqdrD/jNj+J38L/khU36bZ/8ATHWohP4/yjf9fQ6EIXc8wIQhACEIQAhCgab0iKFJzyccm73HL58kBWdpNMinLAcQO9iNeTBvOvYOKxVp0sA29mTkBhJIAHIyORCqtJ6RNVxBJjFz5O3Wd+/eVWVLQ57teOA54Y8AT1O5aSaVOmk0cPad4kEk3S84y7PCcmjPfDVUaXsE6jGDQM5JuiNuJgcCpz63s2Q2BHcGMZ+8RxAHCE5bbVFRrYECTGw3Lo53njp0DVtbRw1ZNGO3G9MxkcH8IGKpdM0DdLTGPvGMicCMIgGHkcQtC+2C652cmMcszTcf2YY8x+PfjEq0Q9jjEy7WZNxgM9f13RMmHq2aATBzLW4Y4CeeIwPDFRn2dwy1Rz1/XBaitZc3YQHgDZHc/uTQs16LuRy+uinLLSscdqmlZbwF7NRfZ1KLjEwcxEtOvEfWa11m0RrKdr6KBacJWH5dVveHcYd7pxb45jcdo37N6sdB6WdZ6l6e6SL4OWBm8N49SoukLIaT/MKI46/rf81rdZRz2XGuvfpIqtvCMW+N6fkq6208eZ8/zWY7F6Vh3sSc/dx1AjAbx4iclrbTBJIxEkjwXFlj8bp1Y5fKbU1es4feMcVaO0ZWd71of/M7zcE3Yn3KrSciYPA4esrVBhR8dnOTXrMt7Og5ued4AHzTzOzTNjzzaP7VpW00r2aPhf8AR+X+M63s1T+Dq4+hSqmgKbRjTYcRn3tvxLRspr200O7zHqqmPabyWxlP+D0v9Gn/AAN+SFf/AKOhWy26UhCFuwCEIQAhCEALmf2g6XvVC0Hus7oj4j7x5Zfu710TSFpFKk+ocmtLugXBe0VsLngTnJM7XY+RCvCCGKtbUM3HkGjAcsCei80W+9VJ1NwHHWT1PXcq+0V4k8m8B9DxU+w0fZ05xvEEDxd5x0V1U7WjXl72g5e9y97zJ6Ji02g3nOJ1E78wf7Qp9hpCKjzhDABxI271R6QrxfOxuEbIP59VE9VZ0ctVoiiOLXHeLt4/1eKtG1bjGtP3RGGt2ZjbJLhl1VHa2SWM2GDvAz/pA5qVWrS4byD1dHp4qqmGNJPHsmtb94mOAwA6t8CrHs3RvU2vI94E8rxhUdasO4dTGuPUvy8eq22grF7OjTYc2tAPGIPiufly606uHHvZ2nQXrrPgVODF49i5a62G7SWIOaTrGKxDxEgrqml7NIOC5zpehdcV0cOX05OfD7V9ltBY9rhm04fXDBdPslpFWk17cnCeBwkLlWtbXsRbbzH0j90F7eGAI6x1Vc+O5tjxZaul3Uat9Y6V9jX/ABNB6gLCub9dV0Ts229ZaR/CR0c5vosMF5kCzL39HVl7JHslppCDTs6XaaHd5jyKn06SVa6Xc5jyKei2ovYIVh7NeoG2kQhC1ZBCEIAQhCAyn2iW65QFOcajsf2W94+i4hpOvNWZ+hl9bl0L7RtI37Q5oODAGZ5HGT9eq5fbX/rDqgYZ/W9b8cF6h+i6Xgn3WiT1wCtqDy68Tu8zjuwCoKb4BdhqgbxkPFWlgJ9mW6zd44PF4+JPNGSsV9Wtl2i4/ER5THgqCsZYccywDmYT1uJuFsxA8ok+Cj3wbv7WHjHPJRirKnfazWdjAHgSagXtW096cgMQP3ZjrgoVN8ve4HYBwMf+XVNWup7xG/xw6wilFpoGxe1qtH3W4u4h5ujqOgjWukU6AACwHZ/SLaQIIJJP15laayabc8xcMbVy8nddnF1FxdS7qLMbwxCTbXwFhpur7c0ELn/amgBK0eka9Z5hoICz+ltC1CC5zstWa249SsOS2xj35q67KWi5aac5Olp4EbuCqKrcSnLHUuvY7Y4eeK6cu44pdV2B+iyfcxPwuz15HInjHNbPscD+itBBBDqgIOBBvkxjxVFYnYA6/PA81Ktum69Or7CzsY50AvvNJN84R7w+7cHErk4vW/K1hai6s1YbXpF1Rgq02tYXAOimZg7yTC1IC20y2KbV7bm9wcfQpyk1FvHdHH5p6Taq7qE5dQpUukIQtGYQhCAEmo+ATsBPRKVZ2kr3LNUxglpAPEIDifaG1F9Zx+JzieABPqsZanG9itJpGoA9w3uu/XJZe1HM/WS6sCyeir3Ve9nnh9Ut2BrePeZPkqd2h7Q2n7V1F7acTeIwjaQMQOIVr2Qp/rAT8TP6gfkozssrTCWWbWenaF19RutpjnBn0VS/AYZhwPOGx5rTdsaUWmrOI7vLuhw8As1aPdG29PQBZYXpec7RKJMvjaCORJ6YnoE/oyx+0qXZyAJ5ARxgmeSj0jFNp1l5PR35J2x2x1OobgkkR4bdX5oy2MZrTbaK0XTaCboPecMccASPRXNmutyAXOrDbLQ97ZLrrqgBLSPvO70TJBkz1wWvoV3NrezbNRhMXvh3k5EcFy54X118eeN601dAhQNK1ITtlJgJjT9E3L2xZRrfFBpfS1Og28/EnBrRmTzyG0lZnSWmq1amXta0MDrpAIvD0IjYVcaT0N+kObUvkXW3YuhwxJJkHbh0UZ+h7lMsvYE3nQ2CT1wECIW2Pxnrnz+d6njDVs5SJgHcCfAqy0nZPZ1IjDAgbpUB7IJHFdM7jkymq7+6kG2mlQpYMuNvHAuJcDiXZie5IGBk5yqwWV9otNV1OoWEvcQ4GDBc4jGRAhu3YtX2d0Cy7StF95c6nSOqIusI1ThdCHdhbOc3VjzZ/sUa0m1A0FoesysHPtBqNjFpqE7HAxfdPuxzK1t1VuiezVGzOvUy8n8RB1OGoD4j4K3hGjj2mE3bx3Rx+aeY1N2zLmmX2roQnEKVLRCEKkBCEIAWQ7eWmWeyB+7PXD18VrajoBJXL+0tq9o+oQc5x8QE4eMc60ge9xnoRPI4Kjre9JGuSrnSAx4Ef7f7gqm2HvHgPKPRdE8T9uhUrQ919hdLC2C37paRu3HPeqZtnFFzQN56YpnsppIOp3T77AGnew+6eRw6bU5XbNThI5kO/JcclmVj0MrM8ZV72mfflw1tb0AaJ35ka9ax9qEMbqxP9Tfr/K0zTepFuuGtOrXAnmszpIw1v7TsOYVcf+MeQ3SswdSp/wATudW717w8disNCaOa81HOnuxkdxcV5ounNiL4Pda7hDawdI6x+6rnQbO9XbH/AFA3lDQfAlTnl60ww8WWj+z9BgBuS6BJ3xifNXFlsIGQhSmUlKYyAue3bpxx0ap0Vb0tGipTMjcqwVMYGJ2LVaKbFPHinjNs+bO449OY22x+wqFmrNs7EGkCFqO11maRe1gqip0gWzqR4rHvtzvtjSuvaRv9fms5X95bftlZu6cMpPhj5LDVTr3Lp4ruOPnmsnffsx0hSraPpio836f6og1HzDQLuF7DCOi1pZZ8iJOOEPJwzMZ6x1XHvsQ0qGWl9F2VVhu/tCD4gHoF1xtMZgy1wqEYEQO7hB34Kq5kjRzqGIo3Re72AInVOOY3qdCqboBnKG0Hz+Iucxx5tAHBXCRgJm1DBPJNQYICBdQpN1CWlbPgolc4sVe01Kji6tAY1ziLjDeugG6IAPeCXYn1O6XXzUOEtY5j2m9dEumHDXOAiNRThXF0VCoNA2ms97gal9jTDg+m5jxmAWugB4MHHH536CUvaq3eyowDi7DfH1C5jpV5uA5XrxHAkAeAHVXva7SXtahj3QS1vlI3wT1Czum/dG4HgMBh0VRpJqMlpEk8/wAvCQ1VFodIHD1/8ire2mQRsJHI4hU9V8SNRAPXGOq2l6Z2G9HWk0qgdqyI2t1jyPEBbWwAVLxdjIBa4bZgTxMDw1rBPwK1/ZHtVSspDa9O9TLrznCSQLrhdgbyDr8Fjy47m424c5Oq0QoCmWYgirRaZ43HHyI3Qslp9sOA/EeMwPULQ2rT9OqKNNs3qNNtN+BGIgbMSdyp+1rAKgI1knnEc5IJG4hZ4b3205NXFL7P97Rzt1O0DL8ReOJx8lb9maV6rWOq/I/eaMfE9VS9jz/7V7Z1v5TT8jcctN2Lpd17trmdBRpD5rPPrbo4ruYtRQpYJ1wTzG4LxzVg32a0Y4B7iYkeUZp5un7xPce0AwC4AXt4EyBxATdaxNeMQJ2pipYrrTAT2jLGVA09pVphs6+KRZ6gLcBCh6VoGWkiMMl5Y6kCEfSd6qi7WgEcnf0OXOHHArfdrK0NP739LlgDl4rq4fHHz3tN0BpE2evTrZhjg4ja37w3yF9NWeoCxsFpllQ90yBeh48D0Xyoxd3+ybSZtFkDCW3qU0jJIcWkS12IxwlvFi0rnbysIdG6gP8A9D+asFFbZiXS4jMGBrjLkDjG1SlJBBQhBvLqF6hAYzRBbecbjzIdAuRk2CNk4QtXQpADKMF4NH0h/wBNmz3RlMwvTQp02uIa1ggyQAMN+5I7SRaBkTBjWIGrkVUdqNMGlSIBEu7sg4jDEx9Zp2yUmul7alOpOod0YYZS7ZkVz/tJbg97sg1uURAxxdhhifEApTe1YyK6taL9QAbAY8BO2e90Ewk6bwZGZj+0jrgF5oClevVjkTgcRIA1bsRsySNMuzH4Xf3fMLSeqvjJWp2Lt4EfzeirLYMGniPEn1HRS7e+ANsied765qI58sI3kjkB6E+C12yqFVT7ad5oI4O3HfuwUZjk7Y7RdMESDhHlGwpCLdpLaz4zNwjjCl6YtQqBh1wQeLWnwwCiOcC+8NbR4FMWmpDG8T4tI9VF9ab6aTsPSmk45zE8JqMHiR1Wu7ENmg1230hv9qyH2e2iPatOVzDk++fFbXsdhZ27i8dKj1ycvtdnD5GmBwSK1SBKUwryvSvYLFvVVV7U2dowcXnKGNc7EYZgbVndJds6pJAoVY1YAbta2H/C2HG6J3KHatGtGfkltvxfjnvrnNs03aqhkMDRtOJ8MArvQVR5aXPcSeQA4QPNXD9H09ii22KbTqHkqn+I58sddMh24tIgNGZPgsg7JSNLW81qjn6iSGjY0YD5qLVGA+vrJduGOpp5HJl8qQAtx9kumTQtzWEwyr3HjUSLzmE8CD/EsO1SLHaHU6jXtMOa4ObxBkcRu1q2T68CFQdmNJi0WWhWa95DroIddzycDDRiDI5K/UGEIQgBCEICMNI0v9Rn8QXptVM/fZ/EFzWjevC9ZrNEAyGuBmBgACIEypFoNMNksYyZBguGYO189Nqj5xp+K7XXa2rZ6dM3Q01XDCMYGcnHBc7FI1XQZDNeGLt3TPiBgpek7ewmGAmABiSZPEkxqTdlJiTjrGwx85wVKxmomuqNYLogACAMefE457QqPSVWbwGBIcOrcfJSbbaCAev14KhtVogiTkY5QGk+KrGFlWe0hVlzv2iR1MeCjPdB8x0nyS7Zg44Rs4avlyTFSprOofktWSO8wcEphOfNNs68cQn5Gvz8EUlnRfkNxH8xTVpPdbxPoEizVMBzz6yiufd5+YUfbT6XXZIOFQkHbI3GAeWS2fZS0llMtIyqVQePtHH1WV7GsF4b2PB3gvj0jmtnoimJqjX7QE/vU6c/zB3RcnLe67eCdRorNawdan0XyqD2cJbLa5m9c7orUUkmtRBVJR7RUh7zrp34eOSRa+19kYO9aKI3e0ZPSZVRHiZaKAjYud/aLbhTolgPeqS0Dd948Iw5hTNMfaTZ2gikH1XaoBa3m52McAVzHTGlalpqGpUMnIAe60Tk0eutb8XHlbusOfmx1qGmDIJVpOCXZRiOJ8v8pVvbmN/15rrcKAx8KQ10pktRTdBT0l2L7FdO4usbjheFSnuPevt559V2dfJ+gNJus1enXZ7zHXhvGRHMYL6g0DpRlposqsIIcNWo5QVnlFLBCEJAIQhAZTSOiBSGDiYnMZdOQAXPtMudfM54nbAEz9DxgzrdLdpGuktfLQ43dU92JOG9x5BYbSWk/aFxkS527ACTyi9PM7UpjI1luu0JoglxnIXRrIALnydZce6NgHNWAtIDIndhrjhqmY3RCrPbBz88AIAnUMuceZ2JjSFqjAfst45Ty9VY2ctVqnrA5Y/XBUFrtUmdUDxIPkPFKtNeZAOAn/KqbTVvHDITG/f9bFUiLTlqqXs9eOGo5eYOGyOKiVRhH0U5ekHcZ4AxPk3xTSqItImN6L0oeF7dQW0myHzPiFIqty4D5piyNwPJTXN+t31CitJ403ZJkEfskc74cPNaay9y0uGqpTBA3scQ7+tvUqj7PU4a0/hb1j8oVpbK0Gm/4XY/sv7ruhuu5Ljz7yd/HdYxeOfgoVqqoNoUC01CVlI1uSr0taQ0OccgCSucVqhc4uOZJJ5mVqe1tswFMazjyWVC7eHHU28/ny3dEtQAlAJULZzpdg94dfT1SreO9G8+TUiwe+Ofol2/3+Z8m/JI6iQvHNlPVWwZ249Y+aSAqImg/UV1H7IO07qVcWZ5/V1Jj8Lg0meGHSVyyoIxVjoy2Gk9lVubCHAbSMY55KacfWqFE0Ta/a0WVPiaD1EzhngQealrMBCEIN87W63EBrdok8zJ8Aqmpa8InEkk+E/LkmdI2rMDM4ctngFHoMLsTMZDfrw25jkelSNbVvY5ul20yJ2ZDxVdbLQJJmYkD1d59VItVa62OvGIVLXra+g4eicTa8rOJHifSUxcnJKvTjjKL2GavTO3YIjLHbsO7gkPZrCW31j8/rYpFOjjBy/x+R5pGr3DJLDdZy8/y3q3tugKjCO7eBgtOoziBx3Hgqp7ccc/r6wRsaSbLkTvCkz3hwTNNsBo5nwXt6TxUVpHRNEUR7Np+oHdPqVNtdkEEES0ggjaDmOfqs/2V0wHgUz77Z/ebqO/UCtZZnhzY2YHhqPRcmc1XXhZYqaE3briS5vdJ24SHcxB5qPaH5gKfbm3YeNl128TgeRnqNirrUQGkzhE8kpFWsF2hqTVI2Yczj6hVwCdtlS88u2knqZSWhd2M1HnZ3dtNxgnAEVAvQME0pOimS8fWsLzSHvnn5n5J3Qre+mrZ754n+opGQcQPDj9QE2nqbZa4cD4x6pAHVURJRZ3QY+sV7CS9utIPov7Jbaalhpg/cBZvusN1vIw6OBGQC2y5b9hlrvUa1In3SHjg+WkDgac/v8AXqSyphCEIN8qVKbi7AYnKc42hucfiI2kapmexud5x70QNo14zr8p6WlWkykDdxcc3R5fX5U1uq3Red+634j8tf8AlXFq+215z5Cc9/DzjmoTjOKdrA3pdmcU2VcRa9hDm4pThgF6MkEZcrvRb2VKZpkhtRsljsiRgQNt5pyykEjMNVK8IZG8+H+fBTTjT0tK1G/q3AEtkAxMiMo2a8NupQbdaGOlxYwEnOBePExjxIlVQtTspwH1xSTVJMz9c0tL3Eh9VNlyaLjrXso0XyO2es5hBaYIMgjVn88lvND6Z9o0GLrwMRqO8TmJ6SueQpthrXSCD0SywmSsM7i6FVtgcCs/py0kUywGb3W7he84nemqGkgc89o9Rq+slXaQqOfVwnCANhmSeSyx47K1z5JYprQ2HnBKY3WnrQQ57oOM8jz1K87MaLDiatQd1pho+J+Bk/haCDvLhsK3uWnN8dmNFdm31AH1JY3UPvOG3H3R5rTWfs9Sa3/lNIHxBpn+IElaHQWiKld+DbxwJBwawGMXHUT/AIBhaHS3ZCoKJc1xqPEdwADDXBwkjgOCwtyrSXGOe0qNnbU/5NJoLak3GlhJDCWjuRmQBlhKh2fR9ne0F1FpJ1h9Rpz/AGsVKtdMhxmZAdIOYIwjdlkotJhAHDzxRu6LraNaOzjDJpy0wRDibsxhjmDMbVm7VZH03Fr2lpGYOzURqIO0YLc2e0EYHEfWR1Jy3aPZXZcccDNx8SabvVu1uvPOCnhnZ6WUn054QgqRbLK+k91N4hzTDhmOIOsEQQdYIKZK3Zug/Ynaiy23AcHse0jaBDx5HxXel85fZg6LfTxgw8t3ua0u8g7xX0Y0yFnlOzeoQhI3zXbbSIL3ZY3Rt1TGzMcBvWZtdc1HSeSk6TtBe7cPoDDLCMNSiMC1xh27SNIU8ncioZKuK7Zaqeq2DCZaSvZ9wJhhjBSnVgGAZ4KM4Yyig3UCTTzS6+Sbp5FIABetC9C9AQBCUF4lBMCE7Tp7PrgkgpdMwkb1xhR32h0ZlPWh/Doob9iAVTXSezlhc5tGkGOjuhxumLziC6TxJ5Qsh2S0L+l2gUpgBrnugTg2MOpHKV3PQnZWkXe0yMkyAJHCcWnHMCcM9ued+jnXbXWGyMpMDGCAPE6yd5T5SKNINECeZJ80tJDJdoOxbLQ51Rj7jiDIIJDiXOcSTMj3owygL3/0PZiy68EEGbzXQYgDEnCM8I1jYtYklmEKbjKblHaHsTVszTUa4Vad4DAEPaCcCRMbBMjPIaqqy2UswfkZnHKAYO46p3rtNJsYYnZnhzWV7QdmHve6pS9mGnFzXd3EzegtEwc8TmUtHtybt3o+BTq5kfqnHaIvMPg9vANWOIXW+1Wi3OsFYwAWlr8/hLSdWHdvjXM5rlLmrbGzRaOaLtr6FWnWZ79N7Xt1AlpmDuOR3Er6d7P6Zp2uzstFIy184HNpDi0tO8ERs5Yr5ip2Ko7FrHkbQ0kdV0D7JO0vsKxsdTBtV0t2tq3cQdgc0DgWj4ijLVGncJXiifpJ+gUKA+UjinGMXgZyUilhmtwkVDDZOoKqqG9Ks6w7hVWQlTeOOEHUkh2pOESmHsISI6UgNwAXjBKdhBkOSmBeRJTjWpwEwlQvWtTgagaJa1P06YTQC8fVSMi1OE4KO0JTygBBLbQOljZy6GyHXZLXXHi7MXXwYHeMggg7iAR9LdmrY2vZaFZsw+mx3egES0SDGEgyMF8rtXfvsZ0gamj7jjPsqrmN3NLWPjq8rPLoN6hEoSIIQhACS6dUJS8cUr0Sur2MkGYg5gTs8BwVFZOy1mZL6dCmHEkuN2TMyYJyE5AYLUkyvHBc+d341wysYvSej8MllNEaEpDSPtne/cDqbful47j3H8Qa6nHM6hHTLVTzWK07S9nWpVRPdqCY2O7nQOc1x/YU8V1k6eTWWG2mn8Tv5PmhLv8A4B1KF16cenzzaPePAf0heUczwQhbEfHuH62qrPzQhLI6SV5VyQhAJp5hOPQhMQgJ5CEAJ0IQgQh6ZqL1Ckzbs06xCEQQBdl+xX/4tX/7z/26aELD/wBH6qx+3TbOnwhCMPEUL0rxCsniRUQhRyfqJ6j2TJ3E+SdKELlq0KvrWT7SZD9pv9TUIRj+zqx/StIhCF3OR//Z',
      status: false
    }
  ];

  checkUser(email: string): User {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.user.length; i++) {
      if (this.user[i].email === email) {
        return this.user[i];
      }
    }
  }

  checkEmailExists(email: string): boolean {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.user.length; i++) {
      if (this.user[i].email === email) {
        return false;
      } else {
        return true;
      }
    }
  }

  constructor() {
  }
}
